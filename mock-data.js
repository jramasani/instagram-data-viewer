// Helper function to create timestamps within last 30 days
function getRandomTimestamp() {
    const now = Date.now();
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
    return Math.floor(thirtyDaysAgo + Math.random() * (now - thirtyDaysAgo)) / 1000;
}

const mockData = {
    "followers": [
        // Top Celebrities (15)
        { string_list_data: [{ href: "https://instagram.com/cristiano", value: "cristiano", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/leomessi", value: "leomessi", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/selenagomez", value: "selenagomez", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/kyliejenner", value: "kyliejenner", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/therock", value: "therock", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/arianagrande", value: "arianagrande", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/kimkardashian", value: "kimkardashian", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/beyonce", value: "beyonce", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/justinbieber", value: "justinbieber", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/kendalljenner", value: "kendalljenner", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/taylorswift", value: "taylorswift", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/zendaya", value: "zendaya", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/tomholland", value: "tomholland", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/emmawatson", value: "emmawatson", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/robertdowneyjr", value: "robertdowneyjr", timestamp: getRandomTimestamp() }] },

        // Athletes (10)
        { string_list_data: [{ href: "https://instagram.com/neymarjr", value: "neymarjr", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/k.mbappe", value: "k.mbappe", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/virat.kohli", value: "virat.kohli", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/serenawilliams", value: "serenawilliams", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/rogerfederer", value: "rogerfederer", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/stephencurry30", value: "stephencurry30", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/lebronjames", value: "lebronjames", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/davidbeckham", value: "davidbeckham", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/simone_biles", value: "simone_biles", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/naomiosaka", value: "naomiosaka", timestamp: getRandomTimestamp() }] },

        // Photographers & Artists (15)
        { string_list_data: [{ href: "https://instagram.com/stevemccurryofficial", value: "stevemccurryofficial", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/humansofny", value: "humansofny", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/streetartglobe", value: "streetartglobe", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/banksy", value: "banksy", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/jimmy.chin", value: "jimmy.chin", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/chrisburkard", value: "chrisburkard", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/paulnicklen", value: "paulnicklen", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/davidlachapelle", value: "davidlachapelle", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/jrart", value: "jrart", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/artofvisuals", value: "artofvisuals", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/creativelysquared", value: "creativelysquared", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/digitalartist", value: "digitalartist", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/contemporaryart", value: "contemporaryart", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/modernart", value: "modernart", timestamp: getRandomTimestamp() }] },
        { string_list_data: [{ href: "https://instagram.com/streetart", value: "streetart", timestamp: getRandomTimestamp() }] }
    ],
    "following": {
        "relationships_following": [
            // Media & News (15)
            { string_list_data: [{ href: "https://instagram.com/natgeo", value: "natgeo", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/nasa", value: "nasa", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/bbcnews", value: "bbcnews", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/cnn", value: "cnn", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/reuters", value: "reuters", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/time", value: "time", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/guardian", value: "guardian", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/vice", value: "vice", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/nationalgeographic", value: "nationalgeographic", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/bbcearth", value: "bbcearth", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/discovery", value: "discovery", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/history", value: "history", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/science", value: "science", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/techcrunch", value: "techcrunch", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/wired", value: "wired", timestamp: getRandomTimestamp() }] },

            // Brands (15)
            { string_list_data: [{ href: "https://instagram.com/nike", value: "nike", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/adidas", value: "adidas", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/apple", value: "apple", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/samsung", value: "samsung", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/gucci", value: "gucci", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/louisvuitton", value: "louisvuitton", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/zara", value: "zara", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/hm", value: "hm", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/chanelofficial", value: "chanelofficial", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/dior", value: "dior", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/prada", value: "prada", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/fendi", value: "fendi", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/supreme", value: "supreme", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/starbucks", value: "starbucks", timestamp: getRandomTimestamp() }] },
            { string_list_data: [{ href: "https://instagram.com/mcdonalds", value: "mcdonalds", timestamp: getRandomTimestamp() }] }
        ]
    },
    "blocked": {
        "relationships_blocked_users": [
            // Spam Accounts (15)
            { title: "fake_giveaway_daily", string_list_data: [{ href: "https://instagram.com/fake_giveaway_daily", value: "fake_giveaway_daily", timestamp: getRandomTimestamp() }] },
            { title: "crypto_scam_official", string_list_data: [{ href: "https://instagram.com/crypto_scam_official", value: "crypto_scam_official", timestamp: getRandomTimestamp() }] },
            { title: "get_free_followers_24h", string_list_data: [{ href: "https://instagram.com/get_free_followers_24h", value: "get_free_followers_24h", timestamp: getRandomTimestamp() }] },
            { title: "verify_badge_service", string_list_data: [{ href: "https://instagram.com/verify_badge_service", value: "verify_badge_service", timestamp: getRandomTimestamp() }] },
            { title: "instagram_support_verify", string_list_data: [{ href: "https://instagram.com/instagram_support_verify", value: "instagram_support_verify", timestamp: getRandomTimestamp() }] },
            { title: "instant_likes_follows", string_list_data: [{ href: "https://instagram.com/instant_likes_follows", value: "instant_likes_follows", timestamp: getRandomTimestamp() }] },
            { title: "real_followers_cheap", string_list_data: [{ href: "https://instagram.com/real_followers_cheap", value: "real_followers_cheap", timestamp: getRandomTimestamp() }] },
            { title: "dating_service_vip", string_list_data: [{ href: "https://instagram.com/dating_service_vip", value: "dating_service_vip", timestamp: getRandomTimestamp() }] },
            { title: "make_money_fast_2024", string_list_data: [{ href: "https://instagram.com/make_money_fast_2024", value: "make_money_fast_2024", timestamp: getRandomTimestamp() }] },
            { title: "forex_trading_guru", string_list_data: [{ href: "https://instagram.com/forex_trading_guru", value: "forex_trading_guru", timestamp: getRandomTimestamp() }] },
            { title: "nft_millionaire_club", string_list_data: [{ href: "https://instagram.com/nft_millionaire_club", value: "nft_millionaire_club", timestamp: getRandomTimestamp() }] },
            { title: "crypto_expert_tips", string_list_data: [{ href: "https://instagram.com/crypto_expert_tips", value: "crypto_expert_tips", timestamp: getRandomTimestamp() }] },
            { title: "fake_ray_ban_sales", string_list_data: [{ href: "https://instagram.com/fake_ray_ban_sales", value: "fake_ray_ban_sales", timestamp: getRandomTimestamp() }] },
            { title: "replica_watches_cheap", string_list_data: [{ href: "https://instagram.com/replica_watches_cheap", value: "replica_watches_cheap", timestamp: getRandomTimestamp() }] },
            { title: "weight_loss_miracle", string_list_data: [{ href: "https://instagram.com/weight_loss_miracle", value: "weight_loss_miracle", timestamp: getRandomTimestamp() }] }
        ]
    },
    "restricted": {
        "relationships_restricted_users": [
            // Gossip/Paparazzi (15)
            { title: "celebrity_gossip_daily", string_list_data: [{ href: "https://instagram.com/celebrity_gossip_daily", value: "celebrity_gossip_daily", timestamp: getRandomTimestamp() }] },
            { title: "paparazzi_exclusive", string_list_data: [{ href: "https://instagram.com/paparazzi_exclusive", value: "paparazzi_exclusive", timestamp: getRandomTimestamp() }] },
            { title: "hollywood_drama_news", string_list_data: [{ href: "https://instagram.com/hollywood_drama_news", value: "hollywood_drama_news", timestamp: getRandomTimestamp() }] },
            { title: "celeb_secrets_revealed", string_list_data: [{ href: "https://instagram.com/celeb_secrets_revealed", value: "celeb_secrets_revealed", timestamp: getRandomTimestamp() }] },
            { title: "star_spotting_daily", string_list_data: [{ href: "https://instagram.com/star_spotting_daily", value: "star_spotting_daily", timestamp: getRandomTimestamp() }] },
            { title: "reality_tv_tea", string_list_data: [{ href: "https://instagram.com/reality_tv_tea", value: "reality_tv_tea", timestamp: getRandomTimestamp() }] },
            { title: "kardashian_news_247", string_list_data: [{ href: "https://instagram.com/kardashian_news_247", value: "kardashian_news_247", timestamp: getRandomTimestamp() }] },
            { title: "celeb_fashion_police", string_list_data: [{ href: "https://instagram.com/celeb_fashion_police", value: "celeb_fashion_police", timestamp: getRandomTimestamp() }] },
            { title: "hollywood_scandals", string_list_data: [{ href: "https://instagram.com/hollywood_scandals", value: "hollywood_scandals", timestamp: getRandomTimestamp() }] },
            { title: "celebrity_breakups", string_list_data: [{ href: "https://instagram.com/celebrity_breakups", value: "celebrity_breakups", timestamp: getRandomTimestamp() }] },
            { title: "famous_feuds", string_list_data: [{ href: "https://instagram.com/famous_feuds", value: "famous_feuds", timestamp: getRandomTimestamp() }] },
            { title: "celeb_plastic_surgery", string_list_data: [{ href: "https://instagram.com/celeb_plastic_surgery", value: "celeb_plastic_surgery", timestamp: getRandomTimestamp() }] },
            { title: "royal_family_tea", string_list_data: [{ href: "https://instagram.com/royal_family_tea", value: "royal_family_tea", timestamp: getRandomTimestamp() }] },
            { title: "influencer_exposed", string_list_data: [{ href: "https://instagram.com/influencer_exposed", value: "influencer_exposed", timestamp: getRandomTimestamp() }] },
            { title: "youtube_drama_alert", string_list_data: [{ href: "https://instagram.com/youtube_drama_alert", value: "youtube_drama_alert", timestamp: getRandomTimestamp() }] }
        ]
    }
};

function loadDemoData() {
    try {
        // Hide upload section
        document.getElementById('uploadSection').style.display = 'none';
        
        // Show demo banner
        const demoBanner = document.createElement('div');
        demoBanner.className = 'demo-banner';
        demoBanner.innerHTML = `
            <div class="demo-notice">
                📝 You're viewing demo data with celebrity profiles
                <button onclick="location.reload()">Exit Demo</button>
            </div>
        `;
        document.body.insertBefore(demoBanner, document.body.firstChild);
        
        // Process mock data
        processInstagramData(mockData);
        
        // Show main content
        document.getElementById('mainContent').style.display = 'block';
        
        // Smooth scroll to stats section
        setTimeout(() => {
            document.querySelector('.stats').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    } catch (error) {
        console.error('Error loading demo data:', error);
        alert('Sorry, there was an error loading the demo data. Please try again.');
    }
} 