import React from "react"
import { Button } from 'react-native'

export default props => {

    const executar = () => {
        console.warn('Exec #01!!!')
    }

    return (
        <>
            <Button
                title="Executar #01!"
                onPress={executar}
            />

        </>
    )
}