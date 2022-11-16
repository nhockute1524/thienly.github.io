var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Thông tin cá nhân";
	$scope.updateInfo = "Cập nhật 20 phút trước";
	$scope.verify = "Đã xác thực";
	$scope.des = "Chút mô tả về bản thân !";
	$scope.cv = "Công việc";
	$scope.job1 = "Bộ phận QC-Cty DongYun Bình Dương";
	$scope.job2 = "IT cài win dạo - Chụp ảnh dạo";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "Zalo : 01214830599";
	$scope.contact2 = "Nhà có xe đạp riêng - Chia tay không đòi quà";
	$scope.contactmi = " Sở thích cá nhân";
	$scope.ifyou = "Nói tóm lại là thích đủ thứ ^^ !";
	$scope.modal1 = "Đọc sách (Trinh thám, kinh dị)";
	$scope.modal2 = "Nghe nhạc (Rap, Beloro)";
	$scope.modal3 = "Chơi game (LMHT, Pubg,.)";
	$scope.modal4 = "Du lịch (Từ nam ra bắc)";
	$scope.modal5 = "Ăn uống (Hải sản, đồ nướng)";
	$scope.linkfb = "http://zing.vn";
	$scope.linkzl = "";
	$scope.linksc = "";
	$scope.linkgm = "lmint@anonyviet.com";
	$scope.phonenumber = "01214830599 - Vinaphone";
	$scope.email = "lmint@anonyviet.com";
	$scope.title2 = "Vài dòng tâm sự";
	$scope.contentStory1 = "Tính cách vui vẻ - lạc quan - hòa đồng - nhiều năng lượng tích cực. Luôn tìm kiếm sự mới mẻ, khám phá bản thân, tình yêu, cuộc sống. biết trân trọng thời gian, đam mê công nghệ, trân trọng giá trị tinh thần trong văn học, tín ngưỡng tâm linh, đam mê ăn uống, du lịch, chụp ảnh, sống ảo. Đôi khi nhiều tâm trạng với những nổi buồn vu vơ ^^";
	$scope.contentStory2 = "Châm ngôn sống : Sống trọn vẹn từng ngày - sống là không chờ đợi. đừng bỏ lại tuổi trẻ phía sau.!";
	$scope.storytitle1 = "Đôi nét về bản thân ...";
	$scope.storytitle2 = "Suy nghĩ về cuộc sống ...";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});