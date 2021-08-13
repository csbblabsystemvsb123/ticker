let socket;

export const loadCurrenyDetails = async () => {
    socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    const msg = JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tBTCUSD'
    });

    socket.onopen = () => socket.send(msg);

    socket.onmessage = ({ data }) => {
        console.log(data);
    }

    // socket.onerror = () =>

    // socket.close();
};