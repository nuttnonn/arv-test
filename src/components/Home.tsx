import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { UserData } from '../types/UserTypes'
import UserList from '../components/UserList'
import User from '../components/User'

function Home() {
  const apiUrl: string = "https://random-data-api.com/api/users/random_user?size=5"
  const [fetchedData, setFetchedData] = useState<UserData[]>([])
  const [input, setInput] = useState<string>('')
  const [selectedData, setSelectedData] = useState<UserData | null>()

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(apiUrl)
    setFetchedData(data)
  }, [])

  const fetchMoreData = useCallback(async () => {
    const { data } = await axios.get(apiUrl)
    setFetchedData((prevData: UserData[]) => [...prevData, ...data])
  }, [])

  const filteredResults = useMemo(() => {
    const inputLowerCase = input.toLowerCase()
    if (fetchedData) {
      return fetchedData.filter((data: UserData) => {
        return (
          data.username.toLowerCase().includes(inputLowerCase) ||
          data.first_name.toLowerCase().includes(inputLowerCase) ||
          data.last_name.toLowerCase().includes(inputLowerCase)
        )
      })
    }
  }, [input, fetchedData])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log('Fetch!')
  }, [fetchData])

  useEffect(() => {
    console.log('Fetch More!')
  }, [fetchMoreData])

  const handleClick = () => {
    fetchMoreData()
  }

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      {filteredResults &&
        <UserList data={filteredResults} selectedData={setSelectedData} />
      }
      {selectedData &&
        <User data={selectedData} onClose={() => setSelectedData(null)}/>
      }
      <button onClick={handleClick}>Fetch More</button>
    </div>
  );
}

export default memo(Home);