<?php
/**
 * Created by PhpStorm.
 * User: chenwei
 * Date: 2018/8/5
 * Time: 上午10:40
 */
@exec("arp -a", $array); //运行arp -a命令，结果放到数组$array中
foreach ($array as $value) {
    //匹配结果放到数组$mac_array
    if (strpos($value, $_SERVER["REMOTE_ADDR"]) && preg_match("/(:?[0-9A-F]{2}[:-]){5}[0-9A-F]{2}/i", $value, $mac_array)) {
        $mac = $mac_array[0];
        break;
    }
}
print_r($array);
echo $mac;