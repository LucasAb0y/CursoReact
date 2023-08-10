import Button from 'react-bootstrap/Button';

const ButtonComponent = ({bsButtonType, label , onClickFunction} ) => {
  return (
    <>
      <Button variant={bsButtonType} onClick={onClickFunction}>{label} </Button>
      
    </>
  );
}

export default ButtonComponent;