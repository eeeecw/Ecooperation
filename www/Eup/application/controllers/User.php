<?php
/**
 * Created by PhpStorm.
 * User: chenwei
 * Date: 2018/9/28
 * Time: 上午10:25
 */
class User extends MpController {

    public function doreg($name = '') {
      header("Content-type: text/html; charset=utf-8");
      $res = array();
      $res['ret'] = 0;
      $res['msg'] = '注册成功';
      $res['content'] = 'husdfhiwqerbiocxv78';
      echo json_encode($res);
    }

    public function dologin($name = '') {
      header("Content-type: text/html; charset=utf-8");
      $res = array();
      $res['ret'] = 0;
      $res['msg'] = '登录成功';
      $res['content'] = 'husdfhiwqerbiocxv78s';
      echo json_encode($res);
    }

    public function dostatus($name = '') {
        header("Content-type: text/html; charset=utf-8");
        $res = array();
        $res['ret'] = 0;
        $res['msg'] = '用户绑定了数据';
        $res['content'] = 'husdfhiwqerbiocxv78s';
        echo json_encode($res);
    }

    public function dobundBili($name = '') {
        header("Content-type: text/html; charset=utf-8");
        $res = array();
        $res['ret'] = 0;
        $res['msg'] = '绑定成功';
        $res['content'] = 'husdfhiwqerbiocxv78s';
        echo json_encode($res);
    }
}