import { useEffect, useState } from 'react'

export default (allowedRoles) => {
    return (WrappedComponent) => {
        return function WithAuthorization() {
            const [state, setState] = useState({
                isLoggedIn: false,
                user: null,
                token: null,
            })
            
            async function setData() {
                setState({
                    isLoggedIn: true,
                    user: {
                        name: 'John Smith',
                        role: 'manager',  
                    },
                    token: 'not important, only a sample'
                })
            }
        
            useEffect(() => {
                setData()
            }, [])
            
            const { isLoggedIn, user} = state
            const role = user?.role
            const userCanSeeWrappedComponent = isLoggedIn && allowedRoles.includes(role)
            
            if (!isLoggedIn) {
                return <div>Redirect to login page</div>
            }
        
            if (!userCanSeeWrappedComponent) {
                return <div>Error 403</div>
            }
            
            return WrappedComponent
        }
    }
}