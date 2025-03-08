export function processSvg(svg: string): string {
    const pathRegex = /<svg .+?<\/defs>(?<pathFrag>.+?)<\/svg>/im;
    const classRegex = /class=".+?"/gim;
    // return the first capture group by matching the definition regex and returning the index 1 of the retunrend array.
    const matchedFragment = [...(svg.match(pathRegex) ?? [])][1];
    return matchedFragment.replace(classRegex, "");
}
