function superbowlWin(record) {
    for (const superbowl of record) {
        if(superbowl.result == "W") {
            let win = superbowl.year
            return win;
        }
    }
}
