import axios from 'axios'
import { Loading } from 'element-ui'
//正式
// const baseURL = process.env.NODE_ENV === 'production'?'':'/api';
//测试http://demo.188388.cn:8083/zh_hundsun/index.php/
const baseURL = process.env.NODE_ENV === 'production' ? 'http://demo.188388.cn:8083/zh_hundsun/' : '/index.php';
//局域网
// const baseURL = process.env.NODE_ENV === 'production' ? 'http://192.168.3.70:8888/zh_hundsun/' : '/index.php';

export function fetch(options) {
    let { url, type, data, header, loading } = options;
    let config = {
        url,
        method: type || 'GET',
        loading: loading == false ? false : true

    }
    if (type && (type.toUpperCase() == 'POST')) {
        config.data = data || {};
    } else {
        config.params = data || {};
    }

    let headers = {
        //    'Content-Type': 'application/json',
        //    'Authorization':localStorage.tokenpc?localStorage.tokenpc:'',
        //    'Platform':2
    }
    if (header) headers = Object.assign(headers, header);
    return new Promise((resolve, reject) => {
        let Load = null;
        //ie会强制缓存没变化的接口
        // config.url += `?ie_cache=${Math.random()}`;
        //if (config.loading) Load = Loading.service({ text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, .3)' })
        const instance = axios.create({
            baseURL: baseURL,

            //定义请求文件类型
            headers,
            timeout: 120000,
        });
        //请求成功后执行的函数
        instance(config).then(res => {
            //if (config.loading) Load.close();
            resolve(res.data);
            //失败后执行的函数
        }).catch(err => {
            console.log(err, 'error')
            //if (config.loading) Load.close();
            reject(err);
        })
    });
}