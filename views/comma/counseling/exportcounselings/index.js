import styled from 'styled-components';
import { MainLayout , Row } from 'components/layouts';
import { CommaMainLayout } from "components/layouts/CommaMainLayout";
import { ExportCounselings} from './organisms';

export default function ExportCounselingView(){

    return(
        <CommaMainLayout headerType="store">
            <ExportCounselings />
        </CommaMainLayout>
    )
}