import { api } from "~/utils/api";

/* Default connection

{
  "port": "AUTO",
  "baudrate": 115200,
  "printerProfile": "_default",
  "autoconnect": true,
  "command": "connect"
  "save": true
}*/
function Test() {
  /* Status fetch interval = 2sec */
  const status = api.octopi_data.getStatusPrinter.useQuery(undefined, {
    refetchInterval: 2000,
  });

  const connect = api.octopi_data.connect.useMutation();
  const disconnect = api.octopi_data.disconnect.useMutation();
  return (<>
    <div className="m-4">
      apiOctoPi: {JSON.stringify(status.data)}
      {/* profiles: {JSON.stringify(profiles.data)} */}
      {/* Estado actual de la impresora */}
      <div>
        <h1>Estado actual de la impresora</h1>
        <div>
          <h2>Temperatura</h2>
        </div>
      </div>
      <button
        disabled={(status.data?.current.state === "Operational" || status.data?.current.state === "Printing")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
        onClick={() => connect.mutate({
          port: "AUTO",
          baudrate: 115200,
          printerProfile: "_default",
          autoconnect: true,
          command: "connect",
          save: true
        })}>Conectar a la impresora</button>
      {/* Desconectar */}
      <button
        disabled={!(status.data?.current.state === "Operational" || status.data?.current.state === "Printing")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
        onClick={() => disconnect.mutate()}>Desconectar de la impresora</button>

    </div>
  </>);
}

export default Test;