import React from 'react';
import "../App.css";
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-input">
                    <i class='fas fa-phone'>: 0420 446 173</i><br />
                    <i class='fas fa-envelope'>: vathsala.komanpally@gmail.com </i><br />
                    <a class='social-icon-link github' href="https://github.com/vathsala-komanpally" target='_blank' rel="noopener" aria-label='Github'>
                        <i class='fab fa-github'>GitHub </i>
                    </a>
                    <a class='social-icon-link linkedin' href='https://www.linkedin.com/in/vathsala-komanpally/' target='_blank' aria-label='Linkedin'>
                        <i class='fab fa-linkedin'>LinkedIn </i>
                    </a>
                    <a class='social-icon-link facebook' href='https://www.facebook.com/vathsala.reddy.3' target='_blank' aria-label='facebook'>
                        <i class='fab fa-facebook'></i>
                    </a>
            </section>
        </div>
    );

}

export { Footer };
{/* <Link class='social-icon-link phone' to='/' target='_blank' aria-label='Phone'>
                    <i class='fas fa-phone'>: 04 20 446 173</i><br />
                </Link>
                <Link class='social-icon-link envelope' to='/' target='_blank' aria-label='Envelope'>
                    <i class='fas fa-envelope'>: vathsala.komanpally@gmail.com </i><br />
                    </Link>
                    <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                        <i class='fab fa-twitter'></i>
                    </Link>
                    <a class='social-icon-link github' href="https://github.com" target='_blank'
                    rel="noopener" aria-label='Github'> <i class='fab fa-github' /> </a>
                    <Link class='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin'>
                        <i class='fab fa-linkedin'></i>
                    </Link>
                    <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='facebook'>
                        <i class='fab fa-facebook'></i>
                    </Link>
                    <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='instagram'>
                        <i class='fab fa-instagram'></i>
                    </Link> */}