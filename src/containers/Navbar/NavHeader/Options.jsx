// Import Components
import ThemeBtn from "../../../components/ThemeBtn/ThemeBtn";
import LangBtn from "../../../components/LangBtn/LangBtn";
// Import Styles
import "./Options.scss";

const Options = () => {
  return (
    <ul className="Options">
      <ThemeBtn />
      <LangBtn />
    </ul>
  );
}

export default Options;