const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML=`
    <div class="footer-content">
            <img src="img/sakhilogo.png" class="logo" alt="">
            <div class="footer-ui-container">
                <ul class="category">
                    <li class="category-title"><a href="#" class="Footer-link">Diwali Gifts</a></li>
                    <li class="category-title"><a href="#" class="Footer-link">Chrismas Gifts</a></li>
                    <li class="category-title"><a href="#" class="Footer-link">Birthday Gifts</a></li>
                    <li class="category-title"><a href="#" class="Footer-link">Annyvarsary Gifts</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About company</p>
        <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, necessitatibus nam aliquid, quidem debitis reprehenderit eius eligendi officia quisquam quasi cumque sequi nostrum odio saepe exercitationem mollitia. Voluptatibus enim exercitationem et asperiores incidunt, illum deserunt quibusdam magni nobis. Accusamus sint assumenda nostrum nesciunt blanditiis dolores ut nemo modi quis adipisci laudantium atque, distinctio laborum, ex quidem hic, dignissimos reiciendis voluptatem sapiente aspernatur odio ab nihil debitis optio. Voluptas expedita architecto nisi laudantium rem vero a, odio quibusdam laboriosam molestiae error! Cupiditate voluptate modi commodi nemo assumenda tenetur error nesciunt repellat facere sit. In harum ab libero, praesentium numquam dolor facere. </p>
        <p class="info">Support Emails-Help@Sakhi.com , coustmersupport@Clothing.com </p>
        <p class="info"> 180 000 000 001 , 180 000 000 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & Conditions</a>
                <a href="#" class="social-link">privacy Policy</a>
            </div>
            <div>
                <a href="#" class="social-link">Twiter</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Instagram</a>
            </div>
        </div>
        <p class="footer-credit">Sakhi-Coustmized Gifting</p>
    `;
}
createFooter();