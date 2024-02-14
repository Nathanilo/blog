import styles from "./Button.module.css";

interface ButtonProps {
  buttonText: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, handleClick }) => {
  return <button className={styles.button} onClick={handleClick}>{buttonText}</button>;
};

export default Button;
