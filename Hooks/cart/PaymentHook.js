import { showErrorMessage } from "@/core/Toast";
import { API } from "@/core/url";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const usePaymentHook = () => {
  const initiatePayment = async (formData, onSuccess) => {
    const { amount, name, email, mobile } = formData;

    const createOrderRes = await API.post("/orders/create-order", { amount });
    const { orderId } = await createOrderRes.data;

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load payment gateway.");
      return;
    }

    const options = {
      key: "rzp_test_zCMFNwSBlZt1gx",
      amount: amount * 100,
      currency: "INR",
      name: "Chaalabagundhi",
      description: `Chaalabagundhi Order`,
      image: "/logo.png",
      order_id: orderId,
      handler: async (response) => {
        // Verify payment first
        const verifyRes = await API.post("/orders/verify-payment", {
          ...response,
          ...formData,
        });

        if (verifyRes.status === 200) {
          await onSuccess();
        } else {
          showErrorMessage("Payment verification failed!");
          //   alert("Payment verification failed!");
        }
      },
      prefill: { name, email, contact: mobile },
      theme: { color: "#179957" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return { initiatePayment };
};
