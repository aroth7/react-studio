import App from '../App';

const BakeryItem = ({item, handleInput}) => {
    return (
        <div class="BakeryItem col-sm-4">
            <div class="BakeryImage">
                <img src={item.image} alt='baker item' class="BakeryImage" />
            </div>
            <div class="flex-1 flex-grow p-4 flex flex-col justify-between">
                <div>
                    <h2 class="text-xl font-bold">{item.name}</h2>
                    <p>{item.description}</p>
                </div>
                <div class="flex items-center justify-between">
                    <p>{item.price}</p>
                    <button class="px-4 py-2 rounded-md" onClick={() => handleInput(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
};

export default BakeryItem;


{/* <div class='BakeryItem col-sm-4'>
<img class='BakeryImage'src={item.image} alt='baker item'></img>
<h3>{item.name}</h3>
<p>{item.description}</p>
<h5>{item.price}</h5>
<button onClick={updateCartList}>Add to Cart</button>
</div>
)

function updateCartList() {
cartList.push([item.name, item.price])
console.log(cartList)
} */}


