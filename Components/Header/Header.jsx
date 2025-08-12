import { HeaderLast } from "./HeaderLast";
import { HeaderTop } from "./HeaderTop";
import { MainHeader } from "./MainHeader";

export const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <HeaderTop />
      <MainHeader />
      <div className="sticky top-0 z-50 shadow-md">{/* <HeaderLast /> */}</div>
    </div>
  );
};
