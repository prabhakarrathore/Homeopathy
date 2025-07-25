class SFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <footer>
        <div class="footer-container">
            <h4>
                Homeopathy for Health
            </h4>
            <i class="fa-brands fa-facebook"></i>
        </div>
        <div class="footer-details">
            <div class="footer-col">
                <span>
                <address>
                    <i class="fa-solid fa-location-dot"></i>
                            13 Fade St., Dublin 2 <br>
                            Co. Dublin, <br>
                            Ireland
                        </address>     
                </span>
                <br>
                <span>
                <address>
                    <i class="fa-solid fa-location-dot"></i>
                        The Old School House<br>
                            Bennekerry <br>
                            Co. Carlow <br>
                            R93 C2P7 <br>
                        </address>
                </span>
            </div>

            <div class="footer-col">
                <span>
                    <i class="fa-solid fa-phone"></i>
                    086 2600893
                </span>
                <span>
                    <i class="fa-solid fa-message"></i>
                    083 0685880 (For Acutes Clinic)
                </span>
                <span>
                    <i class="fa-solid fa-envelope"></i>
                    grainne@homeopathyforhealth.ie
                </span>
            </div>

            <div class="footer-col">
                <span>
                <i class="fa-solid fa-clock"></i>
                   Monday - Friday From 9 AM - 8 PM
                </span>
            </div>
          

        </div>
        <div class="footer-ribbon">
            <p class="Designer">Designed By FCR Media</p>
            <p class="Policy">

                <a href="http://">Privacy Policy</a>
                |
                <a href="http://">Terms & Conditions</a>
                |
                <a href="http://">Return and Refund Policy</a>
            </p>
            <div class="payment-icons">
                <svg xmlns="http://www.w3.org/2000/svg" class="maestro" xml:space="preserve"  width="36px" height="36px" viewBox="0 0 30 30"
                    id="maestro">
                    <g fill="#fff">
                        <path
                            d="M13 13a5.98 5.98 0 0 0 2 4.46c1.224-1.1 2-2.689 2-4.46s-.776-3.36-2-4.46A5.98 5.98 0 0 0 13 13zM21.45 21.675c-.05-.05-.108-.088-.175-.115s-.14-.041-.218-.041a.577.577 0 0 0-.217.04.508.508 0 0 0-.288.293.597.597 0 0 0-.042.227.6.6 0 0 0 .042.228.513.513 0 0 0 .289.292.603.603 0 0 0 .434.001.524.524 0 0 0 .29-.293.599.599 0 0 0 .042-.228.599.599 0 0 0-.042-.227.531.531 0 0 0-.116-.177z">
                        </path>
                        <path
                            d="M28 4H2C.897 4 0 4.897 0 6v18c0 1.103.897 2 2 2h26c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM10.77 22.954h-.384v-.973c0-.297-.125-.461-.385-.461-.252 0-.428.16-.428.464v.97H9.19v-.973c0-.297-.128-.461-.38-.461-.26 0-.429.16-.429.464v.97h-.384v-1.75h.38v.217a.579.579 0 0 1 .513-.26c.267 0 .457.117.578.311.161-.245.392-.315.615-.311.424.004.688.282.688.695v1.098zm2.144-.875v.875h-.38v-.212a.664.664 0 0 1-.553.256c-.49 0-.874-.384-.874-.919s.384-.918.874-.918c.249 0 .432.099.553.256v-.212h.38v.874zm2.064.147h-1.3c.056.315.279.428.524.428a.833.833 0 0 0 .509-.183l.186.282a1.064 1.064 0 0 1-.717.245c-.523 0-.896-.362-.896-.919 0-.545.358-.918.87-.918.49 0 .827.373.831.918 0 .052-.004.1-.007.147zm1.02.772a1.26 1.26 0 0 1-.757-.227l.18-.296a.932.932 0 0 0 .581.183c.26 0 .4-.077.4-.213 0-.098-.1-.153-.308-.183l-.18-.025c-.391-.055-.603-.23-.603-.516 0-.348.285-.56.728-.56.278 0 .53.062.713.183l-.164.307a1.128 1.128 0 0 0-.545-.15c-.21 0-.333.077-.333.205 0 .117.131.15.296.172l.18.026c.38.055.61.216.61.523 0 .333-.292.57-.797.57zm2.02 0c-.45 0-.608-.242-.608-.648v-.798h-.355v-.347h.355v-.53h.384v.53h.622v.347h-.622v.79c0 .176.063.294.253.294a.702.702 0 0 0 .337-.1l.11.327a.894.894 0 0 1-.476.135zm1.87-1.43a.62.62 0 0 0-.239-.045c-.248 0-.373.161-.373.45v.981h-.38v-1.75h.376v.213a.516.516 0 0 1 .462-.256c.076 0 .186.015.27.047l-.117.36zm2.04.877a.886.886 0 0 1-.495.485c-.115.047-.24.07-.376.07s-.26-.023-.375-.07a.896.896 0 0 1-.565-.85.896.896 0 0 1 .565-.85c.115-.048.24-.071.375-.071s.26.023.376.07a.91.91 0 0 1 .496.485.926.926 0 0 1 .071.365.925.925 0 0 1-.071.366zM19 19a5.927 5.927 0 0 1-4-1.534A5.927 5.927 0 0 1 11 19c-3.309 0-6-2.691-6-6s2.691-6 6-6c1.496 0 2.898.541 4 1.534A5.927 5.927 0 0 1 19 7c3.309 0 6 2.691 6 6s-2.691 6-6 6z">
                        </path>
                        <path
                            d="M12.029 21.52c-.33 0-.531.252-.531.56s.201.56.53.56c.315 0 .528-.242.528-.56s-.213-.56-.527-.56zM14.147 21.501c-.27 0-.424.172-.465.425h.908c-.04-.271-.198-.425-.443-.425z">
                        </path>
                    </g>
                </svg>
                <i class="fa-brands fa-cc-paypal"></i>
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
            </div>
        </div>
    </footer>
    `;
    }
}

customElements.define('s-footer', SFooter);
{/* <table class="opening-hours-table">
<tbody>
    <thead>
        <th>Opening Days</td>
        <th>Opening Hours</td>
    </thead>
    <tr>
        <td>Monday</td>
        <td> 09:00- 20:00</td>
    </tr>
    <tr>
        <td>Wednesday</td>
        <td> 09:00- 20:00</td>
    </tr>
    <tr>
        <td>Tuesday</td>
        <td> 09:00- 20:00</td>
    </tr>
    <tr>
        <td>Thursday</td>
        <td> 09:00- 20:00</td>
    </tr>
    <tr>
        <td>Friday</td>
        <td>09:00 -20:00</td>
    </tr>
</tbody>
</table> */}