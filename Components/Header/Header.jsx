import { HeaderLast } from "./HeaderLast";
import { HeaderTop } from "./HeaderTop";
import { MainHeader } from "./MainHeader";

export const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <HeaderTop />
      <MainHeader />
      <HeaderLast />
    </div>
  );
};
