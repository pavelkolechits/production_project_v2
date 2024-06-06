import { ArticleDetails } from "entities/Article"
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { useAsyncRedusers } from "shared/hooks/useAsyncReducers/useAsyncRedusers"
import { VStack } from "shared/ui/Stack/VStack/VStack"
import { Text } from "shared/ui/Text/Text"
import { Page } from "widgets/Page"
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments"

const ArticleDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    console.log(id)
    const { t } = useTranslation()
    useAsyncRedusers({reducers: {
        articleDetailsComments: articleDetailsCommentsReducer
    }})
    if (!id) {
        return <Text title={t('Статья не найдена')} />
    }
   
    return (
        <Page>
            <VStack>
                <ArticleDetails id={id} />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    )

}

export default ArticleDetailsPage