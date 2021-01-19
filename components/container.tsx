import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'

interface Type {
    colors?:string
    content?:boolean
    children?:any
}

const Main_Container = ({colors,content,children}:Type) => {

    return (
    <Container halfcontent={content ? true : false}>
        
        <Box display="flex" justifyContent="center" >
            <Content_Container colors={colors}>

                <Grid container>
                    <Grid item xs={12}>
                         {children}
                    </Grid>
                </Grid>

            </Content_Container>
        </Box>

    </Container>
)}
export default Main_Container

const Container = styled.div`
    max-width:${props => props.halfcontent == true ? "1000px" : ""};
    margin:${props => props.halfcontent == true ? "auto !important" : ""};
    
`
const Content_Container = styled(Box)`
background-color: ${props => props.colors? props.colors:"ืnone"};
border-radius: 0;
/* padding:30px; */
max-width:1300px;
width:100%;
`