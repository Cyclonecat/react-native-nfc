import React, { PureComponent } from "react";
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PHOTO_VIEWS_ACTION } from '../../redux/action';

class Upload extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
                <View style={styles.container}>
                    <Button
                            onPress={() => navigate('Camera')}
                            title="拍照"
                    />
                     <Button
                             color="#841584"
                             onPress={() => navigate('QRcode')}
                             title="扫描二维码"
                     />
                </View >
        );
    }
}

const styles = StyleSheet.create(
        {
            container: {
                flex: 1,
                backgroundColor: '#fff'
            }
        }
);
const mapStateToProps = state => {
    return {
        photoViews: state.PHOTO_VIEWS_REDUCER
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPhotos: PHOTO_VIEWS_ACTION }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);