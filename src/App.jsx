import { productos } from "./data";


function Productos({ productos, size }) {
    return (
        <div
        >
            <div>
                <h3>
                    {productos.title}
                </h3>

                <img
                    src={productos.images}
                    alt={productos.title}
                    width={size}
                    height={size}
                />
            </div>

            <div>
                <h4>
                    {productos.description}
                </h4>

                <p>
                    Precio: ${productos.price}
                </p>
            </div>
        </div>
    );
}




export default function Product() {
    return (
        productos.map(producto => (
            <Productos
                key={producto.id}
                productos={{
                    title: producto.title,
                    description: producto.description,
                    price: producto.price,
                    images: producto.images
                }}
                size={200}
            />
        ))
    )
}
