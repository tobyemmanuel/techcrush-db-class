export let socket;

export function connectSocket(onMessage) {
  socket = new WebSocket(import.meta.env.VITE_REACT_APP_WS_URL);

  socket.onopen = () => console.log('WS Connected');
  socket.onmessage = (event) => onMessage(JSON.parse(event.data));
}
