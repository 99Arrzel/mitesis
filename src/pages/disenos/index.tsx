import { Dashboard, Footer } from "..";

const Card = ({ imageUrl, title, description, likes, creator, onShare }: { imageUrl: string, title: string, description: string; likes: number; creator: string; onShare: () => void; }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white max-w-xs mx-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="rounded-lg w-full h-48 object-cover" src={imageUrl} alt={title} />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="text-gray-600">{likes} </span>
          <span className="text-gray-600">❤️</span>
        </div>
        <button className="text-blue-600" onClick={onShare}>Compartir</button>
        <button className="text-blue-600" onClick={onShare}>Comprar</button>
      </div>
      <p className="text-sm text-gray-500 mt-2">Creador: {creator}</p>
    </div>
  );
};
export default function dise() {
  const items = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 1',
      description: 'Esta es la descripción del objeto 1.',
      likes: 10,
      creator: 'Usuario1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Objeto 2',
      description: 'Esta es la descripción del objeto 2.',
      likes: 20,
      creator: 'Usuario2',
    },
    // Agrega más elementos aquí...
  ];
  const handleShare = (id: number) => {
    alert(`Compartiendo el objeto con ID: ${id}`);
  };


  return (<>
    <Dashboard />
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Ultimos diseños (Mostrar filtros XD)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            likes={item.likes}
            creator={item.creator}
            onShare={() => handleShare(item.id)}
          />
        ))}
      </div>
    </div>
    <Footer />

  </>);
}