function html([first, ...strings], ...values) {
    return values.reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
        .filter(x => x && x !== true || x === 0)
        .join('');
}

const oplungdienthoai = [
    {
        name: 'Ốp lưng Galaxy S23Ultra Silicon',
        price: 600000,
        priceTags: {
            initPrice: '790.000',
            actualPrice: '600.000'
        },
        details: {
            'detail 1': 'Ốp lưng được thiết kế hướng đến sự tối giản, sử dụng gam màu nổi bật đem đến sự trẻ trung.',
            'detail 2': 'Kích thước vừa vặn, các đường cắt chuẩn xác, ốp lưng chuyên dụng cho chiếc Samsung Galaxy S23 Ultra.',
            'detail 3': 'Mặt trong của ốp mềm mại, giúp điện thoại tránh bị trầy xước khi tháo lắp.',
            'detail 4': 'Lưu ý: Thanh toán trước khi mở seal.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1WHdu2Ae07y9LH_m3oCj_rvhWbOsMuzFt',
    }, 

    {
        name: 'Ốp lưng MagSafe Kính viền dẻo GRA-SIMPLE JM',
        price: 240000,
        priceTags: {
            initPrice: '300.000',
            actualPrice: '240.000'
        },
        details: {
            'detail 1': 'Kích thước phù hợp với dòng điện thoại iPhone 14 Pro.',
            'detail 2': 'Tích hợp sạc không dây MagSafe thông minh, tiện lợi.',
            'detail 3': 'Thiết kế tối giản với mặt kính viền dẻo, bảo vệ tốt cho điện thoại.',
            'detail 4': 'Ốp lưng chống va đập tốt, tháo lắp dễ dàng.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1_BPw5OpeAh9HheRcS8sW4ew2J8xYOVeB',
    }, 

    {
        name: 'Ốp lưng Galaxy S23 Nhựa dẻo ARAREE FLEXIELD',
        price: 190000,
        priceTags: {
            initPrice: '300.000',
            actualPrice: '290.000'
        },
        details: {
            'detail 1': 'Thiết kế trong suốt cùng chống bám bẩn tốt, giữ sự mới mẻ dài lâu.',
            'detail 2': 'Đường cắt chỉn chu, ốp lưng được chế tác chuyên dụng cho chiếc Galaxy S23 Ultra.',
            'detail 3': 'Lắp vào vừa vặn, tháo ra dễ dàng nhờ được làm từ chất liệu nhựa dẻo dai.',
            'detail 4': 'Chống sốc tốt, ốp ôm trọn điện thoại giúp bảo vệ từng góc cạnh của thiết bị.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1nQVVShqvPww6YzV8UghecuMoMWPbVQx3',
    }, 

    {
        name: 'Ốp lưng Galaxy A04s Silicone',
        price: 180000,
        priceTags: {
            initPrice: '200.000',
            actualPrice: '180.000'
        },
        details: {
            'detail 1': 'Thiết kế tối giản, ốp lưng mỏng nhẹ, không ảnh hưởng nhiều tới độ dày điện thoại khi đeo ốp.',
            'detail 2': 'Chất liệu Silicone bền bỉ cho độ đàn hồi cao, khả năng chống sốc, chống trầy tốt.',
            'detail 3': 'Màu sắc trang nhã, họa tiết dễ thương.',
            'detail 4': 'Sản phẩm chuyên dụng cho chiếc Galaxy A04s.',
        },
        img: 'http://drive.google.com/uc?export=view&id=13EFpNll7V7H2iCdw-hMqf0pFg78D0l6j',
    }, 
    
    {
        name: 'Ốp lưng iPhone XSMax viền dẻo PU',
        price: 36000,
        priceTags: {
            initPrice: '45.000',
            actualPrice: '36.000'
        },
        details: {
            'detail 1': 'Kiểu dáng thời trang và đẹp mắt.',
            'detail 2': 'Thiết kế vừa vặn và ôm sát thân máy.',
            'detail 3': 'Dễ dàng tháo/lắp ốp vào máy.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1A8CXB7PQe0_vjiUtiSAhEM3FImUa_QJ8',
    }, 

    {
        name: 'Ốp lưng iPhone12 ProMax Nhựa dẻo IMD MEEKER',
        price: 20000,
        priceTags: {
            initPrice: '50.000',
            actualPrice: '20.000'
        },
        details: {
            'detail 1': 'Kiểu dáng thời trang và đẹp mắt.',
            'detail 2': 'Thiết kế vừa vặn và ôm sát thân máy.',
            'detail 3': 'Dễ dàng tháo/lắp ốp vào máy.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1mN-JcJKsePDd4hTWSQqXorMSwmWyuSR5',
    }, 

    {
        name: 'Ốp lưng OPPO A15 Nhựa dẻo CROSSPY JM',
        price: 17900,
        priceTags: {
            initPrice: '25.000',
            actualPrice: '17.900'
        },
        details: {
            'detail 1': 'Kiểu dáng thời trang và đẹp mắt.',
            'detail 2': 'Thiết kế vừa vặn và ôm sát thân máy.',
            'detail 3': 'Dễ dàng tháo/lắp ốp vào máy.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1O43zSRPLu7qGXbTTZKhd1jY2VVkwP1MQ',
    }, 

    {
        name: 'Ốp lưng OPPO A54 Nhựa dẻo Banks II JM',
        price: 10000,
        priceTags: {
            initPrice: '20.000',
            actualPrice: '10.000'
        },
        details: {
            'detail 1': 'Thiết kế sang chảnh với kiểu dáng gọn đẹp, màu xanh tươi sáng.',
            'detail 2': 'Có khung viền bao bọc giữ cho cụm camera hoạt động tốt, giảm xước.',
            'detail 3': 'Tương thích OPPO A54, sử dụng an toàn, dễ dàng như không có ốp lưng.',
            'detail 4': 'Hạn chế phai màu theo thời gian, cầm nắm và tháo lắp nhẹ nhàng với chất liệu nhựa dẻo.'
        },
        img: 'http://drive.google.com/uc?export=view&id=11Ez3kt8M3XxFygTy3uiwh-kCnKPw7SvX',
    }, 
]

let output = html`
    ${oplungdienthoai.map((oldt, index) => html`
        <div class="product__list__item col-md-3 mb-2">
            <div class="product__card card shadow-sm">
                <p class="product__discount"></p>
                <div class="product__img__container">
                    <img 
                        src="${oldt.img}" alt="" class="bd-placeholder-img card-img-top p-3"
                    >
                </div>
                <div class="product__body card-body">
                    <a
                        class="product__name card-text text-decoration-none"
                        href="${'./oplungdienthoai/oplungdienthoai' + index + '.html'}"
                    >
                        ${oldt.name}
                    </a>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p class="product__actualprice border border-danger text-sm-danger rounded p-1">${oldt.priceTags.actualPrice}đ</p>
                            <p class="product__initprice border border-secondary text-sm-muted rounded p-1 text-decoration-line-through">${oldt.priceTags.initPrice}đ</p>
                        </div>
                        <button 
                            class="product__cart btn btn-sm btn-outline-secondary mb-lg-3"
                            data-productbrand="oplungdienthoai"
                            data-productindex="${index}"
                        >
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)}
`
console.log('value: ', output);