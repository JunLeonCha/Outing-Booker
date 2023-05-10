import Props from '../../interfaces/stylesheet/Container';
import { View } from 'react-native';

const Container = ({ children, style, padding }: Props) => {
    return (
        <View style={[style, { padding }]}>
            {children}
        </View>
    );
};

export default Container;