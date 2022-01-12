import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import { IoMdClose } from 'react-icons/io'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const { authenticate, authError, isAuthenticated, logout } = useMoralis()
  const [isToShowError, setIsToShowError] = useState(true)

  useEffect(() => {
    setIsToShowError(true)
  }, [authError])

  function handleHideErrorMessage(){
    setIsToShowError(false)
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginCardContainer}>
        {
          (authError && isToShowError) && (
            <div className={styles.errorContainer}>
              <IoMdClose
              onClick={handleHideErrorMessage}
              />
              <p>{authError.message}</p>
          </div>
          )
        }
        <div className={styles.loginHeaderContainer}>
          <Image
          src="/moralis-logo.png"
          quality={100}
          width={55}
          height={55}
          />
          {
            isAuthenticated ? (
              <div>
                <h1>Hello, Friend!</h1>
                <small>You're logged in</small>
              </div>
            ) : (
              <div>
                <h1>Hello!</h1>
                <small>Sign in to your account</small>
              </div>
            )
          }
        </div>
        {
          isAuthenticated ? (
            <button 
            type="button"
            onClick={() => logout()}
            >
              Logout
            </button>
          ) : (
            <button 
            type="button"
            onClick={() => authenticate()}
            >
              Sign In
            </button>
          )
        }
      </div>
      <div className={styles.friendlyTextContainer}>
        <h1>Welcome Back!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default Home
