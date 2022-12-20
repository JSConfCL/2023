import styled from "@emotion/styled";
import Countdown from "react-countdown";

const StickContainer = styled.div`
  position: fixed;
  z-index: 101;
  display: block;
  width: 100%;
  bottom: 10px;
`;

const Stick = styled.div`
  background: #f45b69;
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
  padding: 8px;
  text-align: center;
`;

const Number = styled.div`
  display: flex;
`;

const Counter = styled.div`
  background: white;
  color: black;
  padding: 8px;
  font-size: 24px;
  font-weight: bold;
font-family: 'Barlow'
  border-radius: 4px;
  margin-right: 4px;
  width: 30px;
`;

const IndCounter = styled.div`
  margin: 0 8px;
`;

const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Bla = ({ number, name }: { number: number; name: string }) => {
  const textNumber = number.toString().padStart(2, "0");
  return (
    <IndCounter>
      <Number>
        <Counter>{textNumber[0]}</Counter>
        <Counter>{textNumber[1]}</Counter>
      </Number>
      {name}
    </IndCounter>
  );
};

const Completionist = () => {
  return <div>Ver la previa! </div>;
};

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Counters>
        <Bla number={days} name="Días" />
        <Bla number={hours} name="Horas" />
        <Bla number={minutes} name="Min" />
        <Bla number={seconds} name="Seg" />
      </Counters>
    );
  }
};

const StickyCountdown = () => {
  return (
    <StickContainer>
      <Stick>
        <Countdown date={1673128800000} renderer={renderer} />
      </Stick>
    </StickContainer>
  );
};

export default StickyCountdown;
