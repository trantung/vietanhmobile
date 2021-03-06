<?php
//default reset password 
define('ADMIN', 1);
define('USER', 2);
//phan trang
define('PAGINATE', 20);
//define upload user avatar
define('USER_AVATAR', 'public/images/users');
//define size avatar user
define('USER_AVATAR_WIDTH', 48);
define('USER_AVATAR_HEIGHT', 48);
//success
define('SUCCESS', 'Success');
//active inactive
define('ACTIVE', 1);
define('INACTIVE', 2);
//value checkbox
define('CHECKED', 1);
define('NOT_CHECKED', 0);
//male, female or orther
define('SEX_MALE', 1);
define('SEX_FEMALE', 2);
define('SEX_ORTHER', 3);
// marriage
define('SINGLE', 1);
define('MARRIAG', 2);
//upload file
define('PROFILE', '/users');
//upload file cho format bao cao
define('REPORT_FORMAT', '/reports/format');
//upload file cho thong bao
define('NOTIFICATION_FILE', '/notification/files');
define('TASK_FILE_UPLOAD', '/tasks');
//if upload file
define('IS_UPLOAD_FILE', 1);
define('IS_UPLOAD_UNIQUE', 1);
//task status
//Đang làm
define('TASK_STATUS_1', 1);
//Hoàn thành
define('TASK_STATUS_2', 2);
//Tạm dừng
define('TASK_STATUS_3', 3);
//permission status
//Toàn quyền
define('PERMISSION_1', 1);
//Bình thường
define('PERMISSION_2', 2);
//status check xac nhan dong y tham gia du an hay task?
// dong y
define('ASSIGN_STATUS_1', 1);
// tu choi
define('ASSIGN_STATUS_2', 2);
// cho xac nhan
define('ASSIGN_STATUS_3', 3);
// quyen
define('ROLE_ADMIN', 1);
define('ROLE_USER', 2);
//chuc nang
define('QUANLYHOSOCANHAN', 1);
define('QUANLYPROJECT', 2);
define('QUANLYCONGVIEC', 3);
define('QUANLYCHUCVU', 4);
//quyen user khi dang nhap
define('USER_ADMIN', 1);
define('USER_FULLROLE', 2);
define('USER_PROFILE', 3);
define('USER_ORTHER', 4);
// de xuat
define('PROPOSAL_USER_NEW', 1);
define('PROPOSAL_USER', 2);
define('PROPOSAL_DEP', 3);
define('PROPOSAL_REGENCY', 4);
//functions position
define('FUNCTION_USER', 1);
define('FUNCTION_REPORT', 2);
define('FUNCTION_TASK', 3);
define('FUNCTION_PROJECT', 4);
// define('FUNCTION_DEPARTMENT', 2);
// define('FUNCTION_REGENCY', 3);
// define('FUNCTION_TEMPROLE', 6);
// define('FUNCTION_PROJECTSTATUS', 7);
//button
define('CREATE', 1);
define('EDIT', 2);
define('DELETED', 3);
define('VIEW', 4);
define('ADD_DEPARTMENT', 5);
define('ADD_SALARY', 6);
define('ADD_OFFICIAL', 7);
define('ADD_QUALIFICATIONS', 8);
//
define('EDIT_FULL_NAME', 1);

//status for salary:
define('SALARY_APPROVE', 1);
define('SALARY_EDIT', 2);
define('SALARY_REJECT', 3);
define('SALARY_PROPOSAL', 4);

//Type up and dow
define('TYPE_SALARY_CHOOSE', 0);
define('TYPE_SALARY_UP', 2);
define('TYPE_SALARY_DOWN', 1);

