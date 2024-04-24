export default function Tabs({ children, button, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
