const data = `<item>
<title>
Bộ Nông nghiệp kiểm tra vết rạn nứt trên thân đập dâng ở Hà Tĩnh
</title>
<description>
<![CDATA[
<a href="http://vnexpress.net/tin-tuc/thoi-su/bo-nong-nghiep-kiem-tra-vet-ran-nut-tren-than-dap-dang-o-ha-tinh-3560819.html"><img width=130 height=100 src="http://img.f31.vnecdn.net/2017/03/25/doancongtacbono
ngnghiepk125851821490442522-1490445232_180x108.jpg" ></a></br>Sau khi thân đập dâng Vũ Quang (Hà Tĩnh) xuất hiện nhiều vết rạn nứt, đoàn công tác Bộ Nông nghiệp vào kiểm tra và kết luận nguyên nhân ban đầu do
 hiện tượng co ngót và tỏa nhiệt bê tông.
]]>
</description>
<pubDate>Sat, 25 Mar 2017 19:40:38 +0700</pubDate>
<link>
http://vnexpress.net/tin-tuc/thoi-su/bo-nong-nghiep-kiem-tra-vet-ran-nut-tren-than-dap-dang-o-ha-tinh-3560819.html
</link>
<guid>
http://vnexpress.net/tin-tuc/thoi-su/bo-nong-nghiep-kiem-tra-vet-ran-nut-tren-than-dap-dang-o-ha-tinh-3560819.html
</guid>
<slash:comments>0</slash:comments>`;

function getBody(str, pre, post) {
    const start = str.indexOf(pre) + pre.length;
    const end = str.indexOf(post);
    return str.substring(start, end);
}

// console.log(getBody(data, '<title>', '</title>').trim());
// console.log(getBody(data, '<link>', '</link>').trim());
// console.log(getBody(data, 'src="', '" ></a>').trim().replace('\n', ''));
// console.log(getBody(data, '</a></br>', ']]>').trim().replace('\n', ''));

function getNewsFromItem(item) {
    const title = getBody(data, '<title>', '</title>').trim();
    const link = getBody(data, '<link>', '</link>').trim();
    const image = getBody(data, 'src="', '" ></a>').trim().replace('\n', '');
    const desc = getBody(data, '</a></br>', ']]>').trim().replace('\n', '');
    console.log(title, link, image, desc);
}

getNewsFromItem(data);