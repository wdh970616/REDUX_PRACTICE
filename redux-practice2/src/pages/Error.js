import { Link } from 'react-router-dom';

function Error() {

    return (
        <>
            <h1>!! 404 ERROR !!</h1>
            <Link to={'/'}>
                <span>MAIN</span>
            </Link>
        </>
    );
}

export default Error;
