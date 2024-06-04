import { ArticleDetails } from "entities/Article"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { VStack } from "shared/ui/Stack/VStack/VStack"
import { Text } from "shared/ui/Text/Text"
import { Page } from "widgets/Page"

const ArticleDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    console.log(id)
    const { t } = useTranslation()
    if (!id) {
        return <Text title={t('Статья не найдена')} />
    }
    return (
        <Page>
            <VStack>
                <ArticleDetails id={id} />
            </VStack>
        </Page>
    )

}

export default ArticleDetailsPage