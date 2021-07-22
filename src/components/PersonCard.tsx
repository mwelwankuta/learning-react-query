import React, { FC } from 'react'

interface Props {
    firstName: string,
    lastName: string,
    avatar?: string
    email?: string,
}

const PersonCard: FC<Props> = ({ avatar, email, firstName, lastName }) => {
    return (
        <div>
            <img src={avatar} height="100px" alt="" />
            <h2>{firstName} {lastName}</h2>
            <div style={{ display: 'flex' }}>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default PersonCard
