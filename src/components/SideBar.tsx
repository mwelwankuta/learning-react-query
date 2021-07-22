import React, { ChangeEvent, FC } from 'react'
import { useQuery, useMutation } from 'react-query'
import PersonCard from './PersonCard'

import { PersonType, ResponseType } from '../types'

const getUsers = async (): Promise<ResponseType | undefined> => {
    return await fetch('https://reqres.in/api/users').then(res => res.json())
}
const addUser = async (person: PersonType) => {
    return await fetch('https://reqres.in/api/users', {
        body: JSON.stringify({
            first_name: person.first_name,
            last_name: person.last_name
        }),
        method: "POST"
    }).then(res => res.json())
}
const SideBar: FC = () => {

    const { data, isLoading, error, refetch } = useQuery('people', getUsers)
    const { mutate, error: addError } = useMutation(addUser, {
        onSuccess: (data, variables) => {
            refetch()
            console.log('success, data: ', data, 'var: ', variables)
        },
        onError: () => {
            refetch()
            console.log('error')
        }
    })

    console.log(data)

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error || addError) {
        return <p>An error occured...</p>
    }
    return (
        <div>
            <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
                e.preventDefault()
                mutate({ first_name: 'mwelwa', last_name: 'nkuta' })
            }}>
                <button type="submit">Submit</button>
            </form>
            {isLoading === false &&
                data?.data.map((person: PersonType) =>
                    <PersonCard
                        key={person.id}
                        firstName={person.first_name}
                        lastName={person.last_name}
                        email={person.email}
                        avatar={person.avatar}
                    />
                )}
        </div>
    )
}

export default SideBar