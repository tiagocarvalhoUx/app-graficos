import { StyleSheet, Text, View} from 'react-native';
import { CartesianChart, Line  } from "victory-native";

const DATA = [
    {day: new Date("2024-04-10").getTime(), price: 500}, 
    {day: new Date("2024-04-11").getTime(), price: 630}, 
    {day: new Date("2024-04-12").getTime(), price: 940}, 
    {day: new Date("2024-04-13").getTime(), price: 320}, 
    {day: new Date("2024-04-14").getTime(), price: 600}, 
    {day: new Date("2024-04-15").getTime(), price: 250}, 
    {day: new Date("2024-04-18").getTime(), price: 1000}, 
]

export default function App (){
    return(
    <View style={styles.container}>
        <View style={{width: '100%', height: 350}}>
            
            <CartesianChart data={DATA} xKey="day" yKeys={["price"]}>
            {({ points }) => (
            <Line points={points.price} color="white" strokeWidth={4} />
            )}
            </CartesianChart>

        </View>

    </View>
    );
}

const styles= StyleSheet.create({
    container: {
        width:"100%",   
        height:"100%", 
        flex:1, 
        backgroundColor:'#131313',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal:20,
    },
});
