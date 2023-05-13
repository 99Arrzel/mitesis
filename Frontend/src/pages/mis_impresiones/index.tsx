import { Dashboard, Footer } from "..";

const ImageCard = ({ title, description, imageUrl }: { title: string, description: string, imageUrl: string; }) => (
  <div className="bg-white shadow-md rounded-md p-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="rounded-md mb-4" src={imageUrl} alt={title} />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);
const ImageCardGrid = ({ images, done, inTransit }: { images: { title: string, description: string, imageUrl: string; }[], done: string[], inTransit: string[]; }) => (
  <div className="flex">
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
    <div className="ml-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Hechos</h2>
        <ul>
          {done.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">En transito</h2>
        <ul>
          {inTransit.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
const images = [
  // Add your image objects here with a title, description, and imageUrl
  { title: 'Imagen 1', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 2', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 3', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 4', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 5', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 6', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 7', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 8', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Imagen 9', description: 'Descripcion generica de una imagen de una pieza, con detalles como que es de PLA o TPU y sus dimensiones', imageUrl: 'https://via.placeholder.com/300' },
  // ... Add more image objects
];

const done = [
  // Add items that are done here
  'Item 1',
  // ... Add more done items
];

const inTransit = [
  // Add items that are in transit here
  'Item 2',
  // ... Add more in transit items
];


export default function impresiones() {
  return (
    <>
      <Dashboard />
      <div className="p-8">
        <ImageCardGrid images={images} done={done} inTransit={inTransit} />
      </div>
      <Footer />
    </>
  );

}