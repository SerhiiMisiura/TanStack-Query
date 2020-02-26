import React from 'react'
import Link from 'next/link'
import useRepository from '../../hooks/use-repository'

export default () => {
  const id =
    typeof window !== 'undefined' ? window.location.pathname.slice(1) : ''
  const { status, data, error, isFetching } = useRepository(id)

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{id}</h1>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            <p>forks: {data.forks_count}</p>
            <p>stars: {data.stargazers_count}</p>
            <p>watchers: {data.watchers}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
      <br />
      <br />
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
