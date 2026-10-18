const gameData = {
    "persona-5-royal": {
        name: "Persona 5 Royal",
        genre: "JRPG",
        platform: "PlayStation 4, PlayStation 5, Nintendo Switch, Xbox, PC",
        release: "2020 (bản Royal phát hành lần đầu tại phương Tây)",
        rating: "9.5/10",
        description: "Một tựa JRPG theo chân nhóm Phantom Thieves, kết hợp khám phá hầm ngục, chiến đấu theo lượt và đời sống học đường tại Tokyo.",
        review: "Persona 5 Royal nổi bật với phong cách nghệ thuật cá tính, nhạc nền ấn tượng, hệ thống chiến đấu theo lượt và cốt truyện dài."
    },
    "gta-v": {
        name: "Grand Theft Auto V",
        genre: "Hành động, thế giới mở",
        platform: "PlayStation, Xbox, PC",
        release: "2013",
        rating: "9.5/10",
        description: "Game thế giới mở lấy bối cảnh Los Santos, kể câu chuyện của ba nhân vật chính với các nhiệm vụ, hoạt động và chế độ trực tuyến.",
        review: "GTA V được biết đến nhờ thế giới mở rộng lớn, nhiều hoạt động tự do và cách kể chuyện qua ba nhân vật."
    },
    "forza-horizon": {
        name: "Forza Horizon",
        genre: "Đua xe",
        platform: "Xbox, PC (tùy phiên bản)",
        release: "Dòng game bắt đầu năm 2012",
        rating: "9.0/10",
        description: "Dòng game đua xe thế giới mở nổi bật với bản đồ rộng, nhiều mẫu xe và các sự kiện đua đa dạng.",
        review: "Forza Horizon hấp dẫn nhờ cảm giác lái dễ tiếp cận, cảnh quan đẹp và bộ sưu tập xe phong phú. Nội dung cụ thể khác nhau theo từng phiên bản."
    },
    "minecraft": {
        name: "Minecraft",
        genre: "Sandbox, sinh tồn",
        platform: "PC, console, thiết bị di động",
        release: "Bản phát hành chính thức năm 2011",
        rating: "9.4/10",
        description: "Game sandbox cho phép người chơi khai thác tài nguyên, chế tạo, xây dựng công trình và khám phá thế giới dạng khối.",
        review: "Minecraft nổi bật nhờ khả năng sáng tạo tự do, nhiều cách chơi và trải nghiệm xây dựng hoặc sinh tồn cùng bạn bè."
    },
    "league-of-legends": {
        name: "League of Legends",
        genre: "MOBA",
        platform: "PC",
        release: "2009",
        rating: "9.0/10",
        description: "Game MOBA 5 đấu 5, nơi người chơi chọn tướng, phối hợp đồng đội, kiểm soát mục tiêu và phá hủy nhà chính đối phương.",
        review: "League of Legends có chiều sâu chiến thuật, nhiều vị tướng và yêu cầu phối hợp đội hình. Trận đấu tập trung vào mục tiêu và quyết định chiến thuật."
    },
    "fortnite": {
        name: "Fortnite",
        genre: "Battle Royale, hành động",
        platform: "PC, PlayStation, Xbox, Nintendo Switch, thiết bị hỗ trợ",
        release: "2017",
        rating: "8.8/10",
        description: "Trò chơi nhiều chế độ nổi tiếng với Battle Royale, lối chơi xây dựng đặc trưng ở một số chế độ và các sự kiện theo mùa.",
        review: "Fortnite được chú ý nhờ các mùa nội dung, sự kiện trong game và nhiều chế độ chơi. Một số tính năng có thể khác nhau tùy chế độ."
    }
};

function updateDetailPage() {
    const title = document.getElementById("game-title");

    if (!title) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("game") || "persona-5-royal";
    const game = gameData[gameId] || gameData["persona-5-royal"];

    document.title = `${game.name} | GameZone`;
    title.textContent = game.name;

    document.getElementById("game-genre").textContent = game.genre;
    document.getElementById("game-platform").textContent = game.platform;
    document.getElementById("game-release").textContent = game.release;
    document.getElementById("game-rating").textContent = game.rating;
    document.getElementById("game-description").textContent = game.description;
    document.getElementById("game-review").textContent = game.review;

    const imageMap = {
        "persona-5-royal": "https://cdn.awsli.com.br/600x1000/53/53761/produto/121674710/05bdcba7fc.jpg",
        "gta-v": "https://cloudfront-eu-central-1.images.arcpublishing.com/infopro/WKGJBQRWQRL7ZOCD3BBN5OOIB4.jpg",
        "forza-horizon": "https://img.drz.lazcdn.com/static/lk/p/c4586ee7fae09aa5e24802372d18a3cd.jpg_720x720q80.jpg_.webp",
        "minecraft": "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A448%2Ccw%3A1152%2Cch%3A1152%2Cq%3A80%2Cw%3A1152/ek49eytUbtkHvRB6Nbikg4.jpg",
        "league-of-legends": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        "fortnite": "https://citybrawl.com/data/image/fornite.jpg"
    };

    const imageFile = imageMap[gameId] || imageMap["persona-5-royal"];

    ["game-cover", "game-image-1", "game-image-2"].forEach((id) => {
        const container = document.getElementById(id);
        const img = container ? container.querySelector("img") : null;

        if (img) {
            img.src = imageFile;
            img.alt = `Ảnh ${game.name}`;
            img.style.display = "block";
        }
    });
}

function filterGames() {
    const searchInput = document.getElementById("gameSearch");
    const genreSelect = document.getElementById("genreFilter");
    const cards = document.querySelectorAll(".catalog-card");
    const noResults = document.getElementById("noResults");

    if (!searchInput || !genreSelect) {
        return;
    }

    const keyword = searchInput.value.trim().toLocaleLowerCase("vi");
    const selectedGenre = genreSelect.value;
    let visibleCount = 0;

    cards.forEach((card) => {
        const name = (card.dataset.name || "").toLocaleLowerCase("vi");
        const genre = card.dataset.genre || "";
        const matchesName = name.includes(keyword);
        const matchesGenre = selectedGenre === "all" || genre === selectedGenre;
        const visible = matchesName && matchesGenre;

        card.classList.toggle("hidden", !visible);

        if (visible) {
            visibleCount++;
        }
    });

    if (noResults) {
        noResults.classList.toggle("hidden", visibleCount > 0);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateDetailPage();

    const searchInput = document.getElementById("gameSearch");
    const genreSelect = document.getElementById("genreFilter");

    if (searchInput) {
        searchInput.addEventListener("input", filterGames);
    }

    if (genreSelect) {
        genreSelect.addEventListener("change", filterGames);
    }
});
