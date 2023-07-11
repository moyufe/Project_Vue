/*
 * @Author: 亦华宸 1786016109@qq.com
 * @Date: 2023-07-07 23:28:46
 * @LastEditors: 亦华宸 1786016109@qq.com
 * @LastEditTime: 2023-07-09 21:35:10
 * @FilePath: \Vue_data\project_vue\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

axios.defaults.timeout = 5000

const service = axios.create({
    baseURL: 'https://service.test.nttcc.com.cn/',
    timeout: 60000,
    headers:{
        'Content-Type': 'application/json',
    }
})

export default service