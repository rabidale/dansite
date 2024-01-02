import styles from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <header>
            <div className={styles.right}>
                <h2>Dan Goubert</h2>
                <h2>Multimedia Copy & Content Writer</h2>
            </div>
            <div className={styles.left}>
                {/* put links here */}
            </div>
        </header>
    )
}