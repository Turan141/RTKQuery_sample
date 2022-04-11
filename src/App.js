import { useDispatch } from 'react-redux'
import { useGetProductsQuery } from './redux/query'
import { addToBasket } from './redux/reducer'
import './styles.scss'

const Product = ({ data }) => {
    return <h1>{data.title}</h1>
}

export default function App() {
    const { data, isLoading, error } = useGetProductsQuery(6)
    const productMap =
        data &&
        data.map(elem => {
            return <Product key={elem.id} data={elem} />
        })

    const dispatch = useDispatch()
    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : error ? (
                'error...'
            ) : (
                <>{productMap}</>
            )}
        </>
    )
}
