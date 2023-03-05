import Button from "../components/Button";

function Country() {
  return (
    <div className="country">
      <Button text={'Back'} link={'/countries'} />
    </div>
  );
}

export default Country;