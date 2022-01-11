const Color = {
    Red: ['#D7235F', '215, 35, 95, 0.3'],
    Yellow: ['#D2D531', '210, 213, 49, 0.3'],
    Green: ['#21D07A', '33, 208, 122, 0.3'],
    Gray: ['#666666', '102, 102, 102, 1'],
}

export const setColor = (props) => {
    let color;
    const vote = props;

    if(vote === 0) {
        color = Color.Gray;
    }else if(vote < 3){
        color = Color.Red;
    }else if( vote < 6 && vote >=3){
        color = Color.Yellow;
    }else {
        color = Color.Green;
    }

    return color;
} 