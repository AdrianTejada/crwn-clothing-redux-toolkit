import React from 'react'
import { useGetAllProductsQuery } from '../../store/api/api.slice'

const RtkQuery = () => {
  const { data, isLoading, isError, isFetching, isSuccess, isUninitialized } =useGetAllProductsQuery()

  console.log(data)

  return (
    <div>
      <div>
        is Loading:{isLoading.toString()}
      </div>
      <div>
        is Error:{isError.toString()}
      </div>
      <div>
        is Fetching:{isFetching.toString()}
      </div>
      <div>
        is Success:{isSuccess.toString()}
      </div>
      <div>
        is Uninitialized:{isUninitialized.toString()}
      </div>
      {
        data && data.products.map((product)=><div key={product.id}>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
        </div>)
      }
    </div>
  )
}

export default RtkQuery