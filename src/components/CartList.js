export default function MList({cartState}) {
  const createEntry = (item) => {
    return (
      <p>Name: {item.text} Price: {item.price}</p>
    );
  };
  const mData = cartState;
  console.log(mData)
  const listM = mData.map(createEntry);




  let sum = 0;
  mData.forEach(item => {
    console.log(item.price)
    sum = +(item.price) + sum
  });

  return <div>
    <list>{listM}</list>
    <p><b>Total: </b>{sum}</p>
  </div>;
}
