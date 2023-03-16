import { checkToken } from '../../utilities/users-service';

function OrderHistoryPage() {

    async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
    }

    return(
        <>
        <h1>Page One</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}

export default OrderHistoryPage;