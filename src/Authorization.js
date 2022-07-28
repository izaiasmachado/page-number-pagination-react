import { useEffect, useState } from 'react'

export default (allowedRoles) => {
    return (WrappedComponent) => {
        return function WithAuthorization(props) {
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
            
            const { isLoggedIn, user } = state
            
            if (!isLoggedIn) {
                return <div>Redirect to login page</div>
            }
            
            const role = user?.role
            const hasAuthorizedRole = allowedRoles.includes(role)
            
            if (!hasAuthorizedRole) {
                return <div>Error 403</div>
            }
            
            return <WrappedComponent {...props} />
        }
    }
}