export default function (t) {
    if (!t) {
        return "";
    }
    if (typeof t === "string" && (t.indexOf("T") > -1 || t.includes("T"))) {
        t = t.replace("T", " ").replace(/-/g, "/"); // 注意：指定一个具体的时间转换时间戳，需要yyyy/mm/dd hh:ii:ss格式，yyyy-mm-dd在IE和Safari下是有问题的。
    }
    const dt = new Date(t);
    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1).toString().padStart(2, "0");
    const d = dt
        .getDate()
        .toString()
        .padStart(2, "0");
    const hh = dt
        .getHours()
        .toString()
        .padStart(2, "0");
    const mm = dt
        .getMinutes()
        .toString()
        .padStart(2, "0");
    return `${y}-${m}-${d} ${hh}:${mm}`;
}